const DogBreeds = () => {
    const dogBreeds = ['Labradoras', 'Jorkshyras', 'Terjeras'];
    return (
      <div>
        <ol>
          {dogBreeds.map((breed, index) => (
            <li key={index}>{breed}</li>
          ))}
        </ol>
      </div>
    );
  };

  export default DogBreeds