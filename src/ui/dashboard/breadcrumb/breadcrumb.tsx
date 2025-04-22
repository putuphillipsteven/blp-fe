import {Breadcrumb, BreadcrumbItem, BreadcrumbLink} from "@chakra-ui/react";

interface Crumbs {
    path: string;
    element: React.ReactElement
}

type Props = {
    crumbs: Crumbs[]
}

export default function BreadCrumb({crumbs}: Props) {

    if(crumbs.length <= 1) {
        return null
    }

    return (

        <Breadcrumb spacing='8px' separator={'>'}>
            <BreadcrumbItem>
                <BreadcrumbLink href='#'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='#'>About</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}