import React, { useState, useEffect } from "react";
import { Row, Col } from "../../styles/Grid";

const List = () => {
  const [initial, setInitial] = useState(1);
  const [limit] = useState(99);
  const [arrayDivs, setArrayDivs] = useState([]);
  const [isString, setIsString] = useState(false);

  const generateArray = (initial) => {
    const data = Array.from(
      { length: limit / 1 + 1 },
      (_, i) => initial + i * 1
    );
    setArrayDivs(data);
  };

  useEffect(() => {
    generateArray(initial);
  }, [initial]);

  const renderList = () => {
    const data = arrayDivs.map((element) => {
      const idStyle = mod5(element);
      return (
        <div key={`${element}`} className={`background-${idStyle}`}>
          {element}
        </div>
      );
    });
    return data;
  };

  const mod5 = (number) => number % 5;

  const handleInputChange = (event) => {
    if (isNaN(event.target.value)) {
      setIsString(true);
    } else {
      setIsString(false);
      setArrayDivs([]);
    }
    if (!event.target.value) {
      setInitial(0);
    } else {
      setInitial(parseInt(event.target.value));
    }
  };

  return (
    <Row>
      <Col xl="12" lg="12" md="12" sm="12">
        <form>
          <input type="number" onChange={handleInputChange} />
        </form>
        {!isString && renderList(initial, limit)}
      </Col>
    </Row>
  );
};

export default List;
