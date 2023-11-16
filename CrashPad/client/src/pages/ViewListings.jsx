import { ListingView } from "../components/ListingView"



const ViewListings = ({user,data}) => {


  return (<div className="container mx-auto ">
  {data.map((apt)=><ListingView key={apt.id} data={apt}/>)}
  </div> )
  
  
}

export default ViewListings