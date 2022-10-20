import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import TransitionRoute from '../components/common/transitionRoute';

export default function Header() {

    const router = useRouter();
    const { t } = useTranslation('common');

    return (
        <div className="flex h-full bg-slate-600 text-white text p-6">
            <ul className="flex justify-center w-full gap-[7px] text-[18px]">
                <TransitionRoute href="/">{t("menu.home")}</TransitionRoute>
                <li className="px-[10px]">|</li>
                <li><TransitionRoute href={router.pathname} lang="tr">TR</TransitionRoute></li>
                <li><TransitionRoute href={router.pathname} lang="en">EN</TransitionRoute></li>
                <li><TransitionRoute href={router.pathname} lang="de">DE</TransitionRoute></li>
            </ul>
        </div>
    )
}