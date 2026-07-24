import styles from './Card.module.css';

export default function Card({ card, }) {
    return (
        <article key={card.id} className={styles.card}>
            <img src={card.imagem || "/public/img/sem_foto.png"} alt={card.nome} />
            <h2>{card.nome || "Sem nome"}</h2>
            <p className={styles.descricao}>{card.descricao}</p>
            <p>
                <span>Campeão:</span> {'🏆'.repeat(card.campeao)}
            </p>
        </article>
    );
}
