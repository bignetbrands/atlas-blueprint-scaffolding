import style from "./entry-header.module.css";
import style from "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";

export default function EntryHeader({ title, date, author }) {
  return (
    <div className={style.entry}>
      {title && <h2 class="text-danger" className={style.title}>{title}</h2>}

      {date && author && (
        <div className={style.meta}>
          By {author} on <time>{new Date(date).toDateString()}</time>
        </div>
      )}
    </div>
  );
}
