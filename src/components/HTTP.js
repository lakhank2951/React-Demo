import { useEffect, useState } from "react";
import { Button, Table, Card, Form, Row, Col } from 'react-bootstrap';
function HTTP() {
    const [posts, setPosts] = useState(null);
    const [formMode, setFormMode] = useState(null);
    const [title, setTitle] = useState("");
    const [id, setId] = useState(undefined);

    const [completed, setCompleted] = useState(false);

    function createPost() {
        setFormMode('create');
        setTitle('');
        setCompleted(false);
        setId(posts.length + 1);
    }

    function updatePost(post) {
        setFormMode('update');
        setTitle(post.title);
        setCompleted(post.completed);
        setId(post.id);
    }

    function onFormSubmit(e) {
        e.preventDefault()

        if (formMode === 'create') {
            createNewPost()
        } else {
            updateExistingPost()
        }

    }

    async function createNewPost() {
        try {
            const response = await fetch('http://localhost:3002/posts', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id, title, completed })
            });
    
            if (response.status === 201) {
                setPosts(prevPosts => [
                    ...prevPosts,
                    { id, title, completed }
                ]);

                resetStates();
            } else {
                console.error("Failed to create a new post, status code:", response.status);
            }
        } catch (error) {
            console.error("Error creating a new post:", error);
        }
    }    

    async function updateExistingPost() {
        try {
            const response = await fetch(`http://localhost:3002/posts/${id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id, title, completed})
            })

            console.log('response',response)

            if(response.status === 200) {
                setPosts(prevPosts => 
                    prevPosts.map(post => 
                        post.id === id ? { id, title, completed } : post
                    )
                );
    
                resetStates();
            } else {
                console.error("Failed to update a post, status code:", response.status); 
            }
        } catch(error) {
            console.error("Error updating a post:", error);
        }
    }

    async function deletePost(id) {
        try {
            const response = await fetch(`http://localhost:3002/posts/${id}`, {
                method: 'DELETE'
            })

            if (response.status === 200) {
                setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
            } else {
                console.error("Failed to delete a post, status code:", response.status);
            }

        } catch(error) {
            console.error("Error deleting a post:", error);
        }
    }

    function resetStates() {
        setTitle("");
        setCompleted(false);
        setFormMode(null);
        setId(undefined);
    }

    useEffect(() => {
        getPosts();
    }, [])

    async function getPosts() {
        try {
            const response = await fetch('http://localhost:3002/posts');
            if (!response.ok) throw new Error("Failed to fetch posts");
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    }
    
    return (
        <>
            <h1>HTTP Methods</h1>

            <div className="container">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Completed</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            posts && posts.map((post, index) => {
                                return (
                                    <tr key={post.id}>
                                        <td>{index + 1}</td>
                                        <td>{post.title}</td>
                                        <td>{post.completed ? 'Yes' : 'No'}</td>
                                        <td>
                                            <Button size="sm" variant="primary" onClick={createPost}>Create</Button>&nbsp;&nbsp;
                                            <Button size="sm" variant="secondary" onClick={() => updatePost(post)}>Update</Button>&nbsp;&nbsp;
                                            <Button size="sm" variant="danger" onClick={() => deletePost(post.id)}>Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <br />

                {
                    formMode && (
                        <Card>
                            <Card.Body>
                                <Form onSubmit={onFormSubmit}>
                                    <Form.Group as={Row} controlId="formTitle" className="align-items-center">
                                        <Form.Label column sm="2">
                                            Title
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter title"
                                                value={title}
                                                onChange={(e) => setTitle(e.target.value)}
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="formCompleted" className="align-items-center mt-3">
                                        <Col sm="2">
                                            {/* Empty column for alignment purposes */}
                                        </Col>
                                        <Col sm="10" className="d-flex align-items-center">
                                            <Form.Check
                                                type="checkbox"
                                                label="Completed"
                                                checked={completed}
                                                onChange={(e) => setCompleted(e.target.checked)}
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Button variant="primary" type="submit" className="mt-3">
                                        Submit
                                    </Button>
                                </Form>

                            </Card.Body>
                        </Card>
                    )

                }

                <br />

            </div>
        </>
    )
}

export default HTTP;