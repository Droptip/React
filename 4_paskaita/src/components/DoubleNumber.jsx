function DoubleNumber() {
    const numbersArray = Array.from({ length:20 }, (_,index) => index +1);

    return (
        <div>
            <ul>
                {numbersArray.map((number) => (
                    <li key={number}>
                        {number}
                        {number % 2 === 0 && `(${number * number})`}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DoubleNumber