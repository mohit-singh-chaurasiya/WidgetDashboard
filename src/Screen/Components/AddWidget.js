import React, { useState } from "react";

// Initial JSON structure for the dashboard
export default function AddWidget(){

 
const initialDashboard = {
  title: "My Dynamic Dashboard",
  categories: [
    {
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          id: "widget_1",
          title: "Risk Overview",
          type: "chart",
          data: {
            type: "bar",
            labels: ["Low", "Medium", "High"],
            values: [30, 50, 20]
          },
          position: {
            x: 0,
            y: 0,
            width: 4,
            height: 3
          }
        }
      ]
    }
  ]
};

 
  const [dashboard, setDashboard] = useState(initialDashboard);

 
  const addWidget = (categoryName) => {
    const newWidget = {
      id: `widget_${Math.random()}`, // Unique id for the widget
      title: "New Widget",
      type: "chart",
      data: {
        type: "line",
        labels: ["Jan", "Feb", "Mar"],
        values: [5, 15, 25]
      },
      position: {
        x: 4,
        y: 0,
        width: 4,
        height: 3
      }
    };

    setDashboard((prevDashboard) => {
      const updatedCategories = prevDashboard.categories.map((category) => {
        if (category.name === categoryName) {
          return {
            ...category,
            widgets: [...category.widgets, newWidget]
          };
        }
        return category;
      });

      return { ...prevDashboard, categories: updatedCategories };
    });
  };

  // Function to dynamically remove a widget from a category
  const removeWidget = (categoryName, widgetId) => {
    setDashboard((prevDashboard) => {
      const updatedCategories = prevDashboard.categories.map((category) => {
        if (category.name === categoryName) {
          return {
            ...category,
            widgets: category.widgets.filter((widget) => widget.id !== widgetId)
          };
        }
        return category;
      });

      return { ...prevDashboard, categories: updatedCategories };
    });
  };

  return (
    <div>
      <h1>{dashboard.title}</h1>

      {dashboard.categories.map((category) => (
        <div key={category.name}>
          <h2>{category.name}</h2>
          <div className="widgets">
            {category.widgets.map((widget) => (
              <div key={widget.id} className="widget">
                <h3>{widget.title}</h3>
                {/* Render widget content based on widget.type */}
                {widget.type === "chart" && <p>Chart goes here</p>}
                {/* Remove button */}
                <button onClick={() => removeWidget(category.name, widget.id)}>
                  Remove Widget
                </button>
              </div>
            ))}
          </div>
          <button onClick={() => addWidget(category.name)}>Add Widget</button>
        </div>
      ))}
    </div>
  );
}

 
