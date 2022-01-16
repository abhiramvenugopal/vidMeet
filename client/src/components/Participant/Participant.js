import './Participant.css';
import ParticipantImg from "../../assets/img/participant.png";

function Participant() {
    const participants=[
        {
            name:"abhiram venugopal",
            email:"abhiram@gmail.com"
        },
        {
            name:"ajay kumar",
            email:"ajay@gmail.com"
        },
        {
            name:"ashel",
            email:"ashel@gmail.com"
        }
    ]
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-2'>
                {
                    participants.map((participant,index)=>{
                        return(
                            <div className="card" key={index} >
                                <img src={ParticipantImg} className="card-img-top" alt="..."/>
                            </div>  
                        )

                    })
                }
                
            </div>
            <div className='col-md-10 presenter'>
                <div className="card" >
                    <img className='card-img-top presenter-img' src={ParticipantImg} alt="..."/>
                </div> 

            </div>

        </div>
    </div>
  );
}

export default Participant;
