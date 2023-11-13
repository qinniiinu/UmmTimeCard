import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = `localhost:3000`;

  constructor(private http: HttpClient) {}

  getRegion(): Observable<Region[]> {
    // return this.http.get<Region[]>(`${this.baseUrl}/region`);
    return of([
      {
        id: 1,
        region: '北部',
        createDate: '2000-01-01',
      },
      {
        id: 2,
        region: '中部',
        createDate: '2000-01-01',
      },
      {
        id: 3,
        region: '南部',
        createDate: '2000-01-01',
      },
      {
        id: 4,
        region: '東部',
        createDate: '2000-01-01',
      },
    ]);
  }

  getLocation() {
    return of([
      {
        id: '1',
        location: 'Central Park',
        address: '123 Central Park West, New York, NY 10023',
        isValid: true,
        locationNumber: 'CPW123',
        phone: '+1234567890',
        createDate: '2023-11-08T12:34:56Z',
      },
      {
        id: '2',
        location: 'Golden Gate Park',
        address: '501 Stanyan St, San Francisco, CA 94117',
        isValid: false,
        locationNumber: 'GGP501',
        phone: '+0987654321',
        createDate: '2023-11-07T11:21:30Z',
      },
      {
        id: '3',
        location: 'Hyde Park',
        address: 'Serpentine Rd, London W2 2UH, United Kingdom',
        isValid: true,
        locationNumber: 'HPUK100',
        phone: '+442079460000',
        createDate: '2023-11-06T10:15:45Z',
      },
    ]);
  }

  getStaff(): Observable<Staff[]> {
    return of([
      {
        id: 2,
        staffName: 'Emily Johnson',
        staffNumber: 'SF124',
        region: '東區',
        locationNumber: 'LN002',
        gender: 'Female',
        phone: '+1 234-567-8901',
        jobName: 'Regional Manager',
        arrivalDate: '2023-11-06',
        isValid: true,
        SuperiorNumber: 'SF102',
      },
      {
        id: 3,
        staffName: 'Michael Brown',
        staffNumber: 'SF125',
        region: '南區',
        locationNumber: 'LN003',
        gender: 'Male',
        phone: '+1 345-678-9012',
        jobName: 'Sales Associate',
        arrivalDate: '2023-11-05',
        isValid: false,
        SuperiorNumber: 'SF103',
      },
      {
        id: 4,
        staffName: 'Linda Davis',
        staffNumber: 'SF126',
        region: '西區',
        locationNumber: 'LN004',
        gender: 'Female',
        phone: '+1 456-789-0123',
        jobName: 'Customer Service Representative',
        arrivalDate: '2023-11-04',
        isValid: true,
        SuperiorNumber: 'SF104',
      },
      {
        id: 5,
        staffName: 'James Wilson',
        staffNumber: 'SF127',
        region: '中區',
        locationNumber: 'LN005',
        gender: 'Male',
        phone: '+1 567-890-1234',
        jobName: 'IT Support Specialist',
        arrivalDate: '2023-11-03',
        isValid: true,
        SuperiorNumber: 'SF105',
      },
      {
        id: 6,
        staffName: 'Patricia Martinez',
        staffNumber: 'SF128',
        region: '北區',
        locationNumber: 'LN006',
        gender: 'Female',
        phone: '+1 678-901-2345',
        jobName: 'Human Resources Manager',
        arrivalDate: '2023-11-02',
        isValid: false,
        SuperiorNumber: 'SF106',
      },
      {
        id: 7,
        staffName: 'Robert Anderson',
        staffNumber: 'SF129',
        region: '東區',
        locationNumber: 'LN007',
        gender: 'Male',
        phone: '+1 789-012-3456',
        jobName: 'Quality Assurance Engineer',
        arrivalDate: '2023-11-01',
        isValid: true,
        SuperiorNumber: 'SF107',
      },
      {
        id: 8,
        staffName: 'Jennifer Thomas',
        staffNumber: 'SF130',
        region: '南區',
        locationNumber: 'LN008',
        gender: 'Female',
        phone: '+1 890-123-4567',
        jobName: 'Marketing Coordinator',
        arrivalDate: '2023-10-31',
        isValid: true,
        SuperiorNumber: 'SF108',
      },
      {
        id: 9,
        staffName: 'William Garcia',
        staffNumber: 'SF131',
        region: '西區',
        locationNumber: 'LN009',
        gender: 'Male',
        phone: '+1 901-234-5678',
        jobName: 'Financial Analyst',
        arrivalDate: '2023-10-30',
        isValid: false,
        SuperiorNumber: 'SF109',
      },
      {
        id: 10,
        staffName: 'Elizabeth Martinez',
        staffNumber: 'SF132',
        region: '中區',
        locationNumber: 'LN010',
        gender: 'Female',
        phone: '+1 012-345-6789',
        jobName: 'Project Manager',
        arrivalDate: '2023-10-29',
        isValid: true,
        SuperiorNumber: 'SF110',
      },
      {
        id: 11,
        staffName: 'David Rodriguez',
        staffNumber: 'SF133',
        region: '北區',
        locationNumber: 'LN011',
        gender: 'Male',
        phone: '+1 123-456-7891',
        jobName: 'Operations Manager',
        arrivalDate: '2023-10-28',
        isValid: true,
        SuperiorNumber: 'SF111',
      },
    ]).pipe(tap((res) => console.log(res)));
  }
}

export interface Region {
  id: number;
  region: string;
  createDate: string;
}

export interface Staff {
  id: number;
  staffName: string;
  staffNumber: string;
  region: string;
  locationNumber: string;
  gender: string;
  phone: string;
  jobName: string;
  arrivalDate: string;
  isValid: boolean;
  SuperiorNumber: string;
}
