/**
 * @module Actions/Company
 * @desc All Company actions
 */
import * as types from './company.constants';
// Types
import type { Company, LoadingKeys } from '@/types/company';
import type { Action, ExtraActionInfo } from '@/types/store';
import type { Nullable } from '@/types/common';

class Actions {
  /**
   * set loading
   * @param {boolean} status
   * @param {LoadingKeys} key
   * @return {Action<{ open: boolean; key: LoadingKeys }>}
   */
  public setLoading(
    status: boolean,
    key: LoadingKeys
  ): Action<{ status: boolean; key: LoadingKeys }> {
    return {
      type: types.SET_LOADING,
      payload: { status, key },
    };
  }
  /**
   * fill companies
   * @param {Nullable<Company[]>} companies
   * @param {ExtraActionInfo} options
   * @return {Action<Nullable<Company[]>>}
   */
  public fillCompanies(
    companies: Nullable<Company[]>,
    options?: ExtraActionInfo
  ): Action<Nullable<Company[]>> {
    return {
      type: options?.sagas ? types.SAGAS_GET_ALL_COMPANY : types.SET_COMPANIES,
      payload: companies,
    };
  }
  /**
   * fill company details
   * @param {Nullable<Company>} company
   * @param {Nullable<string>} id
   * @param {ExtraActionInfo} options
   * @return {Action<Nullable<Company | string>>}
   */
  public selectCompany(
    company: Nullable<Company>,
    id: Nullable<string>,
    options?: ExtraActionInfo
  ): Action<Nullable<Company | string>> {
    return {
      type: options?.sagas
        ? types.SAGAS_GET_COMPANY_DETAILS
        : types.SET_COMPANY_DETAILS,
      payload: options?.sagas ? id : company,
    };
  }
}

const CompanyActions = new Actions();

export default CompanyActions;
