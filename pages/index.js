import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Container from "../components/container";

import MainContainer from "../components/maincontainer";

import PostsContainer from "../components/postscontainer";
import Ghostheader from "../components/ghostheader";

import HomeFooter from "../components/homefooter";
import LeadCard from "../components/leadcard";
import Nav from "../components/nav";
import Subscribe from "../components/subscribe";
import Posts from "../components/posts";
import Author from "../components/author";
import Layout from "../components/layout";
import { request } from "../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../lib/fragments";
import { Main } from "next/document";

export async function getStaticProps({ preview }) {
  const graphqlRequest = {
    query: `
      {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        blog {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
        }
        allPosts(orderBy: date_DESC, first: 20) {
          title
          slug
          excerpt
          category {
            name
          }
          date
          coverImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
              ...responsiveImageFragment
            }
          }
          author {
            name
            picture {
              url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
            }
          }
        }
      }

      ${metaTagsFragment}
      ${responsiveImageFragment}
    `,
    preview,
  };

  return {
    props: {
      subscription: preview
        ? {
          ...graphqlRequest,
          initialData: await request(graphqlRequest),
          token: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
        }
        : {
          enabled: false,
          initialData: await request(graphqlRequest),
        },
    },
  };
}

export default function Index({ subscription }) {
  const {
    data: { allPosts, site, blog },
  } = useQuerySubscription(subscription);

  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  const metaTags = blog.seo.concat(site.favicon);

  return (
    <>
      <Layout preview={subscription.preview}>
        <Head>{renderMetaTags(metaTags)}</Head>
        <Ghostheader />
        <Container>
          <Nav />
          <MainContainer>
            <LeadCard
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              category={heroPost.category.name}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
            <PostsContainer >
              {morePosts.length > 0 &&
                <Posts posts={morePosts} />}
            </PostsContainer>
            <Subscribe />
            <Author />
          </MainContainer>

        </Container>

        <HomeFooter />
      </Layout>
    </>
  );
}
