import useSWR from "swr";

export default ({ mdxSource, frontMatter }) => {
  const { data } = useSWR(
    `/api/page-views?slug=${encodeURIComponent(localizedSlug)}`,
    async (url) => {
      const res = await fetch(url);
      return res.json();
    },
    { revalidateOnFocus: false }
  );
  const views = data?.pageViews || 0;

  return (
    <>
      <div>{views} views</div>
    </>
  );
};
