export default function ProjectCard({ project }) {
  function statusTransform(status) {
    switch (status) {
      case "new":
        return "Not Started";
      case "progress":
        return "In Progress";
      case "completed":
        return "Completed";
    }
  }

  return (
    <div className="col-md-6">
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">{project.name}</h5>

            <a className="btn btn-light" href={`/projects/${project.id}`}>
              View
            </a>
          </div>
          <p className="small">
            Status: <strong>{statusTransform(project.status)}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
