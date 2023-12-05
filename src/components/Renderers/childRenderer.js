export const ChildRenderer = {
    HandleItemClick(location) {
        window.location.href = `./children/${location}`;
      },

    render(child) {
        const childHTML =
            <tr key={child.childNo} className="table-item" onClick={() => window.location.href = `./children/${child.childNo}`}>
                <td>{child.childNo}</td>
                <td>{child.subitems}</td>
                <td>{child.name}</td>
                <td>{child.sponsor}</td>
                <td>{child.gender}</td>
                <td>{child.getAge()}</td>
                <td>{new Date(child.birthdate).toLocaleDateString("en-DE")}</td>
                <td>{child.type}</td>
                <td>{child.school}</td>
                <td>{new Date(child.schoolStart).toLocaleDateString("en-DE")}</td>
                <td>{child.class}</td>
            </tr>;
    
        return childHTML;
    }
}