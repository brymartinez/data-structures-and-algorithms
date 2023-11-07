package queue

type Queue struct {
	Size     int
	Elements []int
}

func (queue *Queue) Enqueue(element int) {
	queue = append(queue.Elements, element)
}

func (queue *Queue) Dequeue() {
	lastElement := queue.Size - 1
	*queue = *queue.Elements[:lastElement]
}
