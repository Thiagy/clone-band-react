export default function NewOne({newObjt}) {

    return (
        <div className="flex-box-new">
            <div>
                <img src={newObjt.image} alt={newObjt.content}/>
            </div>
            <div>
                <h5>{newObjt.title}</h5>
            </div>
            <div>
                <h3>{newObjt.content}</h3>
            </div>
        </div>
    );
  }
  
  