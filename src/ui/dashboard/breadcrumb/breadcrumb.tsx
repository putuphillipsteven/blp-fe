import {Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text} from "@chakra-ui/react";
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
            segment !== "" &&
            <BreadcrumbItem key={i} onClick={() => breadcrumbNavigate(segment)}>
                <BreadcrumbLink fontSize={{base: "1em"}} noOfLines={1} w={"full"}>
                    {checkIsDashboard(segment)}
                </BreadcrumbLink>
            </BreadcrumbItem>
        )
    })
    return (
        <Breadcrumb maxW={"full"} spacing={'8px'} separator={'>'} overflowX={"scroll"}>
            {breadcrumbLinks}
        </Breadcrumb>
    )
}