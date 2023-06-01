import moment from "moment";


function CommentCard (comment) {
  const { comment_id, votes, created_at, author, body } = comment.comment;

  const formattedDate = moment(created_at).format("D MMM YYYY");
  console.log(comment)
  return (
    <main>
      <table>
      <thead className="table-dark">
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Auther</th>
              <th scope="col">Comments</th>
              <th scope="col">Votes</th>
            </tr>
          </thead>
        <tbody>
        <tr>
          <td>{formattedDate}</td>
          <td>{author}</td>
          <td>{body}</td>
          <td>{votes}</td>
        </tr>
        </tbody>
      </table>
    </main>
  );
}

export default CommentCard