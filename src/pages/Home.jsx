import React, { useEffect } from "react";
import axios from "axios";

export default function Home() {
    const [users, setUser] = React.useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            loadUsers();
        }, 1000); // Atualiza a cada 1 segundo

        // Limpa o intervalo quando o componente é desmontado
        return () => clearInterval(interval);
    }, []);

    const loadUsers =  async () => {
        const result = await axios.get("http://localhost:8080/demo/all");
        setUser(result.data);
    }

    return (
        <div className="container">
            <div className="py-4">
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr>
                                    
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <button className="btn btn-primary mx-2">ver</button>
                                    <button className="btn btn-outline-primary mx-2">Editar</button>
                                    <button className="btn btn-danger mx-2">deletar</button>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
