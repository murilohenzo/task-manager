import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/core/environments/environment';
import {
  NewTask,
  NewTaskResponse,
  Task,
  TaskList
} from 'src/app/shared/interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getTasksByUser(userId: string): Observable<TaskList> {
    return this.http.get<TaskList>(`${environment.LOCAL}/tasks/${userId}`);
  }

  createTask(body: NewTask): Observable<NewTaskResponse> {
    return this.http.post<NewTaskResponse>(`${environment.LOCAL}/tasks`, body);
  }

  updateTask(taskId: string, body: Partial<Task>): Observable<NewTaskResponse> {
    return this.http.put<NewTaskResponse>(
      `${environment.LOCAL}/tasks/${taskId}`,
      body
    );
  }

  deleteTask(taskId: string): Observable<Task[]> {
    return this.http.delete<Task[]>(`${environment.LOCAL}/tasks/${taskId}`);
  }
}
