export default function FormButtons({ clearBtn, clearForm }) {
  return (
    <div className="text-center">
      <button className="btn btn-primary mx-2 btn-sm">Submit</button>
      {clearBtn && (
        <button type="button" onClick={clearForm} className="btn btn-danger btn-sm">
          Clear
        </button>
      )}
    </div>
  );
}
