const draggables = document.querySelectorAll(".task"); // kichkina divcha
const droppables = document.querySelectorAll(".todo"); //katta div

draggables.forEach((task) => {
	task.addEventListener("dragstart", () => {
		task.classList.add("is-dragging");
		console.log("drag start");
	});
	task.addEventListener("dragend", () => {
		task.classList.remove("is-dragging");
		console.log("drag end");
	});
});

droppables.forEach((zone) => {
	zone.addEventListener("dragover", (e) => {
		e.preventDefault();

		const bottomTask = insertAboveTask(zone, e.clientY);
		const curTask = document.querySelector(".is-dragging");

		if (!bottomTask) {
			zone.appendChild(curTask);
		} else {
			zone.insertBefore(curTask, bottomTask);
		}
	});
});

const insertAboveTask = (zone, mouseY) => {
	const els = zone.querySelectorAll(".task:not(.is-dragging)");

	let closestTask = null;
	let closestOffset = Number.NEGATIVE_INFINITY;

	els.forEach((task) => {
		const { top } = task.getBoundingClientRect();

		const offset = mouseY - top;

		if (offset < 0 && offset > closestOffset) {
			closestOffset = offset;
			closestTask = task;
		}
	});

	return closestTask;
};
