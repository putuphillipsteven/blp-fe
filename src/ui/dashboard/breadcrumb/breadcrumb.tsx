import {Breadcrumb, BreadcrumbItem, BreadcrumbLink} from "@chakra-ui/react";
import {useLocation} from "react-router-dom";
import ownCapitalize from "../../../utils/own-capitalize";

export default function BreadCrumb() {
    const location = useLocation();

    const {pathname} = location;

    const segments = pathname.split("/");

    function checkIsDashboard(segment: string) {
        if (segment == "") {
            return null
        } else {
            return ownCapitalize(segment)
        }
    }

    const breadcrumbLinks = segments.map((segment: string, i: number) => {
        return (
            segment !== "" && <BreadcrumbItem key={i}>
                <BreadcrumbLink
                    href={segment == 'dashboard' ? 'overview' : segment}>{checkIsDashboard(segment)}</BreadcrumbLink>
            </BreadcrumbItem>
        )
    })
    return (

        <Breadcrumb spacing='8px' separator={'>'}>
            {breadcrumbLinks}
        </Breadcrumb>
    )
}