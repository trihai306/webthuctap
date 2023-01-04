import { useEffect, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import PaginationItem from './PaginationItem';

const pageNumbers = [1, 2, 3, 4, 5]

function BlogPagination({getItemRender}) {
    const [active, setActive] = useState(1);
    const [listItems, setListItem] = useState([]); 
    const [renderItem, setRenderItem] = useState([]);

    useEffect(() => {
        async function getItem(callback) {
            const respon = await fetch('https://6367c77ed1d09a8fa61a5a63.mockapi.io/blog-list-items')
            const listItems = await respon.json();
            setListItem(listItems)
        }
        getItem()
        // await getItem(function(listItem) {
        //     console.log(listItem)
        // })
    }, [])

    useEffect(() => {
        const itemsIsRender = listItems.filter(item => {
            return item.page === active;
        })
        setRenderItem(itemsIsRender);
    },[listItems, active]);

    useEffect(() => {
        getItemRender(renderItem);
    }, [renderItem]) 

    function handlePagination(number) {
        setActive(number)
    }

    return (
        <div className='pagination'>
            <Pagination size='lg' style={{ margin: 'auto' }}>
                <Pagination.Prev />
                {
                    pageNumbers.map(number =>
                        <PaginationItem
                            key={number}
                            active={active === number}
                            number={number}
                            handlePagination = {() => handlePagination(number)}
                        >
                        </PaginationItem>
                    )
                }
                <Pagination.Ellipsis />
                <PaginationItem handlePagination={() => handlePagination(142)} active={active === 142} number = {142}></PaginationItem>
                <Pagination.Next />
            </Pagination>
        </div>

    );
}

export default BlogPagination;