import React, {Component, Fragment} from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isError: false,
      isLoading: false,
    };
  }

  // Get API
  componentDidMount() {
    console.log('mount data');
    this.setState({ isLoading: true });
    // URL Ganti dengan alamat github atau API kamu
    fetch("https://api.github.com/users/zidniryi")
      .then((response) => response.json())
      // Jika sukses
      .then((data) => {
        console.log(data);
        this.setState({ data, isLoading: false })
      })
      .catch((err) => {
        // Jika Gagal
        this.setState({ isError: true, isLoading: false });
      });
  }

  render(){
    const data = this.state.data;
    if (this.state.isLoading) return <h1>Loading data</h1>;
    else if (data)
      return (
        <Fragment>
          <div className="app" style={{ marginLeft: "5em" }}>
            <img
              src={data.avatar_url}
              alt="img"
              width="256"
              style={{ marginTop: "2em", borderRadius: 128 }}
            />
            <hr />
            <h2>Name: {data.name}</h2>
            <h2>
              Web : <a href={data.blog}>{data.blog}</a>{" "}
            </h2>
            <h2>Join Github : {new Date(data.created_at).getFullYear()}</h2>
            <h2>Bio: {data.bio}</h2>
            <h2>Location: {data.location}</h2>
          </div>
        </Fragment>
      );
    else {
      return <h1>Something Went Wrong</h1>;
    }
  }
}

export default App;