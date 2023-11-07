export default function InputSection({ invest, onSelect }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>initial investment</label>
          <input
            id="initialInvestment"
            type="number"
            required
            onChange={onSelect}
          />
        </p>
        <p>
          <label> annual investment</label>
          <input
            id="annualInvestment"
            type="number"
            required
            onChange={onSelect}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>expected return</label>
          <input
            id="expectedReturn"
            type="number"
            required
            onChange={onSelect}
          />
        </p>
        <p>
          <label>duration</label>
          <input id="duration" type="number" required onChange={onSelect} />
        </p>
      </div>
    </section>
  );
}
