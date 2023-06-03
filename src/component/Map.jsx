import { GoogleMap,Marker, useJsApiLoader } from "@react-google-maps/api";
import {UserContext} from '../App'
import { useLocation, useNavigate } from 'react-router-dom';


export default function Map() {

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey:'AIzaSyDVJK9NuUuC68_orUPMpLyFx31c2jf3jZE'
      });

      const center ={ lat: 18.52043, lng: 73.856743 };
      const mapStyles = {
        width: "95%",
        height: "50vh",
        borderRadius: "20px",
      }
      return (
        <div className="App">
          {!isLoaded ? (
            <h1>Loading...</h1>
          ) : (
            <GoogleMap
              mapContainerStyle={mapStyles}
              center={center}
              zoom={10}
            >
                <Marker position={center}
                icon={"http://maps.google.com/mapfiles/ms/icons/red-dot.png"}/>
            </GoogleMap>
          )}
        </div>
      );
 }
