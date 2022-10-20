import { useRouter } from 'next/router'
import Link from 'next/link';
import { LOCALIZATION_ROUTES } from '../../localization/routes';

export default function TransitionRoute({ href, lang, children, ...props }) {

    const router = useRouter();
    const pathTranslations = LOCALIZATION_ROUTES;
    const isLang = lang !== undefined ? lang : router.locale;
    const translatedPath =
        pathTranslations[isLang] &&
        pathTranslations[isLang].find(x => x.destination === href) &&
        pathTranslations[isLang].find(x => x.destination === href).source;
    const as = translatedPath ? lang == "tr" ? `/${isLang}${translatedPath}` : `${translatedPath}` : undefined;

    return (
        <Link href={href} as={as} locale={isLang}>
            <a className={`${lang && router.locale === isLang ? "font-bold" : ""}`}>
                {children}
            </a>
        </Link>
    )
}