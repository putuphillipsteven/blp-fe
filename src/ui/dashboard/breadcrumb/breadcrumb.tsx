import {Breadcrumb, BreadcrumbItem, BreadcrumbLink} from "@chakra-ui/react";
import {useLocation, useNavigate} from "react-router-dom";
import ownCapitalize from "../../../utils/own-capitalize";

export default function BreadCrumb() {
    const location = useLocation();

    const {pathname} = location;

    const segments = pathname.split("/");

    const navigate = useNavigate();

    function checkIsDashboard(segment: string) {
        if (segment == "") {
            return null
        } else {
            return ownCapitalize(segment)
        }
    }

    function breadcrumbNavigate(segment: string) {
        return segment == 'dashboard' ? navigate(`overview`) : navigate(`${segment}`)
    }

    const breadcrumbLinks = segments.map((segment: string, i: number) => {
        return (
            segment !== "" && <BreadcrumbItem key={i} onClick={() => breadcrumbNavigate(segment)}>
                <BreadcrumbLink>{checkIsDashboard(segment)}</BreadcrumbLink>
            </BreadcrumbItem>
        )
    })
    return (

        <Breadcrumb spacing='8px' separator={'>'}>
            {breadcrumbLinks}
        </Breadcrumb>
    )
}