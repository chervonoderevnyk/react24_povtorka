
const PostFormComponent = () => {
    // fetch('https://dummyjson.com/posts/add', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //         title: 'I Add a new postiiiiig!',
    //         userId: 4,
    //         /* other post data */
    //     })
    // })
    //     .then(res => res.json())
    //     .then(console.log);



    return (
        <div>
            <form>
                <input type={'text'}/>
                <br/>
                <input type={"number"}/>
                <br/>
                <button>Add post</button>
            </form>
        </div>
    );
};

export {PostFormComponent};