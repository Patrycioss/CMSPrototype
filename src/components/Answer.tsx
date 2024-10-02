interface Props {
    text: string,
    id: string,
}

function Answer({text,id}: Props) {
    return (
        <li className="list-group-item" key={id}>
            <div className="card">
                <div className="card-body">{text}</div>
            </div>
        </li>
    );
}

export default Answer;