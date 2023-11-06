package queue

type Queue []int

func (queue Queue) Create(size int) Queue {
	q := make([]int, size)
	return q
}

func (queue *Queue) Enqueue(element int) {
	*queue = append(*queue, element)
}

func (queue *Queue) Dequeue() {
	lastElement := len(*queue) - 1
	*queue = (*queue)[:lastElement]
}
