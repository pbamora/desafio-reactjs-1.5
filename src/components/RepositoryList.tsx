import { useEffect, useState } from "react";
import { v4 } from "uuid";
import "../styles/tasklist.scss";

import { FiTrash, FiCheckSquare } from "react-icons/fi";

interface Repository {
  id: number;
  name: string;
  private: boolean;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [newRepositoryName, setNewRepositoryName] = useState("");

  useEffect(() => {
   // Faça a busca dos repositorios na api do github e salve no estado da aplicação.
   // link: https://api.github.com/orgs/rocketseat/repos
  }, []);

  function handleCreateNewRepository() {
    // Crie um respoitório passando um ID, name e isPrivate como false
  }

  function handleToggleRepositoryPrivated(id: number) {
    // Utilize o ID da lista de repositórios para encontrar e marcar o repositório como privado.
  }

  function handleRemoveRepository(id: number) {
    // Utilize o ID da lista de repositórios para encontrar e remover o repositório selecionado.
  }

  return (
    <section className="task-list container">
      <header>
        <h2>Repositorios</h2>

        <div className="input-group">
          <input
            type="text"
            placeholder="Adicionar novo repositorio"
            onChange={(e) => setNewRepositoryName(e.target.value)}
            value={newRepositoryName}
          />
          <button
            type="submit"
            data-testid="add-task-button"
            onClick={handleCreateNewRepository}
          >
            <FiCheckSquare size={16} color="#fff" />
          </button>
        </div>
      </header>

      <main>
        <ul>
          {repositories.map((repositorie) => (
            <li key={repositorie.id}>
              <div
                className={repositorie.private ? "privated" : ""}
                data-testid="task"
              >
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    readOnly
                    checked={repositorie.private}
                    onClick={() =>
                      handleToggleRepositoryPrivated(repositorie.id)
                    }
                  />
                  <span className="checkmark"></span>
                </label>
                <p>{repositorie.name}</p>
              </div>

              <button
                type="button"
                data-testid="remove-task-button"
                onClick={() => handleRemoveRepository(repositorie.id)}
              >
                <FiTrash size={16} />
              </button>
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
}
