.PHONY: all backend frontend

run: backend frontend

backend:
	cd backend && python app.py &

frontend:
	cd frontend && npm run dev &

stop:
	@echo "Stopping servers... (You might have to kill them manually)"
