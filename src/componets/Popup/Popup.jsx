const Popup = (props) => {
  const { title, children } = props;
  return (
    <div className="popup">
      <div className="popup__container">
        <h2 className="popup__text">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Popup;
