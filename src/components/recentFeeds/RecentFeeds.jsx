import { useEffect, useState } from "react";
import './recentFeeds.css'
import vectorBottom from '../../images/vector-bottom-yellow.svg'
import RecentFeedCard from '../recentFeedCard/RecentFeedCard'
import img1 from '../../images/recentFeeds/card1.png'
import img2 from '../../images/recentFeeds/card2.png'
import img3 from '../../images/recentFeeds/card3.png'
import { useQuery, gql } from '@apollo/client';
const GET_POSTS = gql`
  query NewQuery {
          posts {
            nodes {
              content
              date
              title
              link
              featuredImage {
                node {
                  altText
                  link
                }
              }
            }
          }
        }
`;
function RecentFeeds() {

    function toMonthName(monthNumber) {
      const date = new Date();
      date.setMonth(monthNumber - 1);
    
      return date.toLocaleString('en-US', {
        month: 'long',
      });
    }
  
    const [wpData, setWpData] = useState({})
    const { loading, error, data } = useQuery(GET_POSTS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    console.log(data)
    let card1 = {
        imgBg : img1,
        header : "Partnering with Engineers for Innovation & Development",
        date : "May 6, 2022",
        likes : "20",
        comments : "2"
    }
    
  return (
    <div className="rf-wrapper">
        
        <img src={vectorBottom} alt="" className="vectorBottom" />
      <div className="rf-content-wrapper">
        <h1 className="rf-header">Recent <span style={{ color: "#EA7F1E"}}>Feeds</span></h1>
        <div className="rf-cards-wrapper">
            
            {data.posts.nodes.slice(0, 3).map((post)=>{
              return(
                <a>
                  <RecentFeedCard link={post.link} img={post.featuredImage.node.link} header={post.title.replace( /(<([^>]+)>)/ig, '').toUpperCase()} date={post.date.split("T")[0]} likes={card1.likes} comments={card1.comments}/>
                </a>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default RecentFeeds
