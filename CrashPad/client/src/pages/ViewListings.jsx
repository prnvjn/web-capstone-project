import { ListingView } from "../components/ListingView"
import apartmentsData from "../seed"


const ViewListings = () => {


  return (<div className="container mx-auto ">
  {apartmentsData.map((apt)=><ListingView key={apt.id} data={apt}/>)}
  </div> )
  
  
}

export default ViewListings