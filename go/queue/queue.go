package queue

import "errors"

type Queue struct {
	Size     int
	Elements []int
}

func (queue *Queue) Enqueue(element int) (bool, error) {
	if len(queue.Elements)+1 == queue.Size {
		return false, errors.New("Queue is full")
	} else {
		queue.Elements = append(queue.Elements, element)
		return true, nil
	}
}

func (queue *Queue) Dequeue() (bool, error) {
	if len(queue.Elements)-1 < 0 {
		return false, errors.New("Queue is empty")
	} else {
		lastElement := len(queue.Elements) - 1
		queue.Elements = queue.Elements[:lastElement]
		return false, nil
	}
}
