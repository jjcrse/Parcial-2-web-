import { ConflictException } from '@nestjs/common';
import { ReservationEntity } from './entities/reservation.entity';
import { ReservationRulesService } from './reservation-rules.service';
import { describe, beforeEach, it } from 'node:test';

describe('ReservationRulesService', () => {
  let service: ReservationRulesService;

  beforeEach(() => {
    service = new ReservationRulesService();
  });

  it('rejects a reservation that is already cancelled', () => {
    const reservation = {
      id: 3,
      purpose: 'Cancelled workshop',
      participants: 8,
      status: 'cancelled',
      room: { id: 1, name: 'Room A' },
    } as ReservationEntity;

    // TODO TEST 1: Check the real rule's rejection with ConflictException.
    it ('returns all serservation with statu', async() =>{
      const reservations = [{id:1}, id]
    })
    throw new Error('TODO TEST 1: complete the cancellation rule test');
  });
});
