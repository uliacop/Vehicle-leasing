import { useState } from "react";
import ExpanderItem from "./ExpanderItem";
import "./TextExpanderList.module.css";
import articles from "../../../data/articles.json";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

export default function TextExpanderList({
  collapsedNumWords = 15,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
}) {
  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 3;
  const visibleArticles = articles.slice(0, page * ITEMS_PER_PAGE);
  const isActivebutton = visibleArticles.length < articles.length;
  return (
    <>
      <ul className="car-list">
        {visibleArticles.map((item) => (
          <li className="car-card" key={item.id}>
            <ExpanderItem
              img={item.image}
              headerText={item.title}
              fullText={item.text}
              collapsedNumWords={collapsedNumWords}
              expandButtonText={expandButtonText}
              collapseButtonText={collapseButtonText}
            />
          </li>
        ))}
      </ul>
      {isActivebutton && <LoadMoreBtn setPage={setPage} />}
    </>
  );
}
