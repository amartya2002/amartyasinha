const features = [
    {
        title: "Use your calender as a todo list",
        id: "todo-list",
    },
    {
        title: "Use your calender as a todo list",
        id: "todo-list",
    },
    {
        title: "Use your calender as a todo list",
        id: "todo-list",
    },
    {
        title: "Use your calender as a todo list",
        id: "todo-list",
    },
    {
        title: "Use your calender as a todo list",
        id: "todo-list",
    },
    {
        title: "Use your calender as a todo list",
        id: "todo-list",
    },
]

export default function Works() {
    return (
        <div className="mx-auto max-w-6xl px-4 ">
            <div className="flex w-full gap-60 items-start ">
                <div className="w-full py-[50vh]">
                    <ul>
                        {features.map((feature) => (
                            <li key={feature.id}>
                                <p className="text-5xl text-gray-300 py-16">
                                    {feature.title}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="sticky top-0 flex h-screen w-full items-center">
                    <div className=" w-64 aspect-square bg-slate-900 rounded-xl"></div>
                </div>

            </div>

        </div>
    )
}