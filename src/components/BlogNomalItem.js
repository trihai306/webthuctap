import { Col } from "react-bootstrap";

function BlogNomalItem({item}) {

    return (
        // <Col style={{marginBottom: '100px'}}>
        //     <div className="nomal-item-wrap-img">
        //         <img
        //             className="pd-img nomal-item-img"
        //             src="https://d357wx87z4hzhv.cloudfront.net/wp-content/uploads/2022/12/27100020/How-to-Get-More-Out-of-Email-Marketing-for-Your-FItness-Center-458x254.webp">
        //         </img>
        //     </div>
        //     <div className="nomal-item-text-content">
        //         <div className="item-link-blue hover-change-color">
        //             EMAIL & SMS MARKETING
        //         </div>
        //         <div className="item-link-black fs-5">
        //             How to Get More Out of Email Marketing for Your Fitness Center
        //         </div>
        //         <div className="nomal-item-date">
        //             Dec 27, 2022
        //         </div>
        //     </div>
        // </Col>

        <Col style={{marginBottom: '100px'}}>
            <div className="nomal-item-wrap-img">
                <img
                    className="pd-img nomal-item-img"
                    src={item.img}>
                </img>
            </div>
            <div className="nomal-item-text-content">
                <div className="item-link-blue hover-change-color">
                    {item.link}
                </div>
                <div className="item-link-black fs-5">
                    {item.desc}
                </div>
                <div className="nomal-item-date">
                    {(new Date(item.date)).toString().split(' ').splice(1,3).join(' ')}
                </div>
            </div>
        </Col>
    )
}

export default BlogNomalItem;