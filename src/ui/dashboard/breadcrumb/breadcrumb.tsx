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
            segment !== "" &&
            <BreadcrumbItem key={i} onClick={() => breadcrumbNavigate(segment)}>
                <BreadcrumbLink fontSize={{base: "1em"}} noOfLines={1} w={"full"}>
                    {checkIsDashboard(segment)}
                </BreadcrumbLink>
            </BreadcrumbItem>
        )
    })
    return (
        <Breadcrumb minW={"full"} maxW={"full"} spacing={'8px'} separator={'>'}
                    paddingBottom={".3em"}
                    overflow={"scroll"}
                    css={{
                        '&::-webkit-scrollbar': {
                            width: "100%",
                            height: '.3em',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: 'var(--chakra-colors-foreground)',
                            borderRadius: "2em",
                            width: "10px"
                        },
                    }}>
            {breadcrumbLinks}
        </Breadcrumb>
    )
}