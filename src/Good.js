const Good=(props)=>{
    const {img,title,cost}=props;
    return(
        <article className="good">
            <img src={img} alt ={title}/>
            <h2>{title}</h2>
            <h4>{cost}</h4>
        </article>

    );
};

export default Good;