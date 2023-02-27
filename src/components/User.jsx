function User(props) {

    return (
        <div className="top">
          <span className="user">
            <span className="name">{props.user}</span>
            <span className="handle">{props.hand}</span>
          </span>
        </div>
    )
}

export default User;