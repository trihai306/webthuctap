import { Pagination } from "react-bootstrap";

function PaginationItem({number, active, handlePagination}) {

    return (
        <Pagination.Item 
            active = {active}
            onClick = {handlePagination}
        >
            {number}
        </Pagination.Item>
    )
}

export default PaginationItem;