import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../shared/layout';

export default function Home() {

  const { t } = useTranslation('common');

  return (
    <Layout title="Nextjs localization for nexti18next">
      <div className="flex flex-col items-center justify-center h-full p-16 bg-slate-700 text-white">
        <span className="text-[34px]">{t("home.welcome")} Next.js! Localization</span>
        <ul className="flex flex-col items-center gap-[10px] mt-[30px]">
          <li className="bg-slate-500 px-[10px] py-[5px] rounded-md">Multiple language options</li>
          <li className="bg-slate-500 px-[10px] py-[5px] rounded-md">Seo friendly used url</li>
          <li className="bg-slate-500 px-[10px] py-[5px] rounded-md">Only server side rendering</li>
        </ul>
      </div>
    </Layout>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
});