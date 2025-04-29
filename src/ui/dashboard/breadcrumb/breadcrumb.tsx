import {Breadcrumb, BreadcrumbItem, BreadcrumbLink} from "@chakra-ui/react";
import {useLocation} from "react-router-dom";
import ownCapitalize from "../../../utils/own-capitalize";

export default function BreadCrumb() {
    const location = useLocation();

    const {pathname} = location;

    const segments = pathname.split("/");

    const url: string = '';

    const breadcrumbLinks = segments.map((segment: string, i: number) => {
        console.log("segment: ", segment)
        return (
            segment !== "" && <BreadcrumbItem key={i}>
                <BreadcrumbLink
                    href={url + `/${segment}`}>{segment == '' ? null : ownCapitalize(segment)}</BreadcrumbLink>
            </BreadcrumbItem>
        )
    })
    return (

        <Breadcrumb spacing='8px' separator={'>'}>
            {breadcrumbLinks}
        </Breadcrumb>
    )
}