import { useState } from "react";
import EventCard from "../../components/EventCard";
import Select from "../../components/Select";
import { useData } from "../../contexts/DataContext";
import Modal from "../Modal";
import ModalEvent from "../ModalEvent";

import "./style.css";

const PER_PAGE = 9;

const EventList = () => {
  const { data, error } = useData();
  const [type, setType] = useState(null); // Initialiser à null
  const [currentPage, setCurrentPage] = useState(1);

  const filteredEvents =
    (!type
      ? data?.events
      : data?.events.filter((event) => event.type === type)) || [];

  // Pagination: filtrer les événements par page
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE
  );

 // Trier les événements par date
 const sortedEvents = paginatedEvents.toSorted((evtA, evtB) =>
  new Date(evtB.date) - new Date(evtA.date)
);

  const changeType = (evtType) => {
    setCurrentPage(1); // Réinitialiser la page lors du changement de catégorie
    setType(evtType);
  };

  const pageNumber = Math.ceil(filteredEvents.length / PER_PAGE); // Utiliser Math.ceil()

  const typeList = Array.from(new Set(data?.events.map((event) => event.type)));

  return (
    <>
      {error && <div>An error occurred</div>}
      {data === null ? (
        "loading"
      ) : (
        <>
          <h3 className="SelectTitle">Catégories</h3>
          <Select
            selection={typeList}
            onChange={(value) => (value ? changeType(value) : changeType(null))}
          />
          <div id="events" className="ListContainer">
            {sortedEvents.map((event) => (
              <Modal key={event.id} Content={<ModalEvent event={event} />}>
                {({ setIsOpened }) => (
                  <EventCard
                    onClick={() => setIsOpened(true)}
                    imageSrc={event.cover}
                    title={event.title}
                    date={new Date(event.date)}
                    label={event.type}
                  />
                )}
              </Modal>
            ))}
          </div>
          <div className="Pagination">
            {pageNumber > 0 &&
              Array.from(Array(pageNumber).keys()).map((page) => (
                <a
                  key={page}
                  className={currentPage === page + 1 ? "active" : ""}
                  href="#events"
                  onClick={() => setCurrentPage(page + 1)}
                >
                  {page + 1}
                </a>
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default EventList;
